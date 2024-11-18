# views.py
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer,LoginSerializer,AdminLoginSerializer,BloodDonateSerializer,CustomUserSerializer,BloodRequestSerializer,BloodStockSerializer
from .models import  CustomUser,BloodDonate,BloodRequest,BloodStock
from rest_framework.permissions import IsAdminUser
from django.contrib.auth import authenticate, login as django_login, logout
from django.db import IntegrityError
from django.conf import settings
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum, Count
from django.http import HttpResponse
from django.views import View
from django.http import HttpResponse
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from datetime import date
import os
from django.core.mail import send_mail

def sendEmail(email):
    sub = 'Blood Donation'
    msg = 'Your request is approved  \n vaibhav movaliya'
    from_mail = 'jn144335@gmail.com'
    to_mail = [email]
    print('---------------------------------')
    send_mail(sub,msg,from_mail,to_mail)


class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.save()
                return Response({'message': 'User created successfully', "data": serializer.data}, status=status.HTTP_201_CREATED)
            except IntegrityError:
                return Response({'message': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LoginView(APIView):
    permission_classes = [AllowAny]  # No authentication needed to access this view

    def post(self, request):
        serializer = LoginSerializer(data=request.data)  # Deserialize and validate login data
        if serializer.is_valid():
            user = serializer.validated_data['user']  # Retrieve the authenticated user
            django_login(request, user)  # Log the user in
            user_data = UserSerializer(user).data  # Serialize the user object
            return Response({'message': 'Login successful', 'data': user_data}, status=status.HTTP_200_OK)
        return Response({'message': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)  # Return error if credentials are invalid
    
class CustomLogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

class UserProfileView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, username):
        try:
            user = CustomUser.objects.get(username=username)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        except CustomUser.DoesNotExist:
            return Response({'detail': 'No user data found'}, status=status.HTTP_404_NOT_FOUND)

    def patch(self, request, username):
        # if username != request.user.username:
        #     return Response({'detail': 'You do not have permission to update this profile.'}, status=403)

        try:
            user = CustomUser.objects.get(username=username)
            serializer = UserSerializer(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except CustomUser.DoesNotExist:
            return Response({'detail': 'No user data found'}, status=404)


class AdminLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = AdminLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            # Check admin credentials
            if username == settings.ADMIN_USERNAME and password == settings.ADMIN_PASSWORD:
                return Response({'success': True}, status=status.HTTP_200_OK)
            else:
                return Response({
                    'success': False,
                    'error': 'Invalid credentials'
                }, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# admin side
class UserListView(APIView):
    permission_classes = [IsAdminUser]
    permission_classes = [AllowAny]
    def get(self, request):
        users = CustomUser.objects.all()
        serializer = CustomUserSerializer(users, many=True)
        return Response(serializer.data)  
      
      
class BloodDonateAPIView(APIView):
    permission_classes = [AllowAny]
    def post(self, request, *args, **kwargs):
        serializer = BloodDonateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#  {
#     "user": 21,
#     "donation_date": "2024-08-27",
#     "blood_group": "O+",
#     "units_donated": 2,
#     "status": "pending"
# }

class BloodDonateListView(APIView):
    permission_classes = [AllowAny]
    def get(self, request, userId):
        donations = BloodDonate.objects.filter(user=userId)
        serializer = BloodDonateSerializer(donations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   

class BloodRequestListCreateView(APIView):
    permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny]


    def post(self, request):
        serializer = BloodRequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     {
#   "user":2,
#   "blood_group": "O+",
#   "units_requested": 2
# }
    
class BloodRequestListView(APIView):
    permission_classes = [AllowAny]

    def get(self, request,userId):
        donations = BloodRequest.objects.filter(user=userId)
        serializer = BloodRequestSerializer(donations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)    
    
    #admin side apporved and rejected
# class BloodDonateListViewadmin(APIView):
#     permission_classes = [AllowAny]  # Ensure this view is accessible
#     def get(self, request):
#         donations = BloodDonate.objects.all()
#         serializer = BloodDonateSerializer(donations, many=True)
#         return Response(serializer.data)

class BloodDonateListViewadmin(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        # Retrieve filter parameters
        status_filter = request.GET.get('status')
        blood_group_filter = request.GET.get('bloodGroup')
        user_name_filter = request.GET.get('userName')

        # Base query
        donations = BloodDonate.objects.all()

        # Apply filters if they are provided
        if status_filter:
            donations = donations.filter(status=status_filter)
        if blood_group_filter:
            donations = donations.filter(blood_group__icontains=blood_group_filter)
        if user_name_filter:
            donations = donations.filter(
                user__first_name__icontains=user_name_filter
            ) | donations.filter(
                user__last_name__icontains=user_name_filter
            )

        serializer = BloodDonateSerializer(donations, many=True)
        return Response(serializer.data)
class BloodDonateStatusUpdateView(APIView):
    permission_classes = [AllowAny]
    
    def patch(self, request, id):
        try:
            print("data",id)
            blood_donate = BloodDonate.objects.get(id=id)
        except BloodDonate.DoesNotExist:
            return Response({"error": "Blood donation not found"}, status=status.HTTP_404_NOT_FOUND)

        # Only allow updating status
        status_value = request.data.get('status')
        if status_value not in ['fulfilled', 'cancelled']:
            return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)

        blood_donate.status = status_value
        
        blood_donate.save()

        serializer = BloodDonateSerializer(blood_donate)
        return Response(serializer.data, status=status.HTTP_200_OK)
#request part 

# class BloodRequestListViewadmin(APIView):
#     permission_classes = [AllowAny]  # Ensure this view is accessible
#     def get(self, request):
#         donations = BloodRequest.objects.all()
#         serializer = BloodRequestSerializer(donations, many=True)
#         return Response(serializer.data)
class BloodRequestListViewadmin(APIView):
    permission_classes = [AllowAny]  # Ensure this view is accessible

    def get(self, request):
        search_query = request.query_params.get('search', '')
        if search_query:
            # Split the search query into first and last names
            search_terms = search_query.split()
            if len(search_terms) == 2:
                first_name, last_name = search_terms
                # Filter based on first and last names
                donations = BloodRequest.objects.filter(
                    user__first_name__icontains=first_name,
                    user__last_name__icontains=last_name
                )
            else:
                # Filter based on a single term if less than 2 parts
                donations = BloodRequest.objects.filter(
                    user__first_name__icontains=search_query
                ) | BloodRequest.objects.filter(
                    user__last_name__icontains=search_query
                )
        else:
            donations = BloodRequest.objects.all()

        serializer = BloodRequestSerializer(donations, many=True)
        return Response(serializer.data)
    
class BloodRequestStatusUpdateView(APIView):
    permission_classes = [AllowAny]
    
    def patch(self, request, id):
        try:
            blood_request = BloodRequest.objects.get(id=id)
        except BloodRequest.DoesNotExist:
            return Response({"error": "Blood request not found"}, status=status.HTTP_404_NOT_FOUND)

        # Only allow updating status
        status_value = request.data.get('status')
        if status_value not in ['fulfilled', 'cancelled']:
            return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)

        blood_request.status = status_value
        # if blood_request.status == 'fulfilled':
        sendEmail(blood_request.email)
        blood_request.save()

        serializer = BloodRequestSerializer(blood_request)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BloodStockList(APIView):
    permission_classes = [AllowAny] 
    def get(self, request):
        blood_stock = BloodStock.objects.all()
        serializer = BloodStockSerializer(blood_stock, many=True)
        return Response(serializer.data)

class UpdateBloodStock(APIView):
    permission_classes = [AllowAny]
    def get(self, request, blood_group):
        try:
            blood_stock = BloodStock.objects.get(blood_group=blood_group.upper())
            serializer = BloodStockSerializer(blood_stock)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except BloodStock.DoesNotExist:
            return Response({"error": "Blood group not found"}, status=status.HTTP_404_NOT_FOUND)
    def post(self, request):
        blood_group = request.data.get('blood_group')
        units = request.data.get('units')

        if not blood_group or not units:
            return Response({"error": "Blood group and units are required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Normalize blood group to handle case sensitivity
        blood_group = blood_group.upper()
        
        try:
            # Retrieve the existing blood stock record
            blood_stock = BloodStock.objects.get(blood_group=blood_group)
            # Add the new units to the existing quantity
            blood_stock.units += int(units)  # Ensure units are an integer
            blood_stock.save()
            return Response({"message": "Blood stock updated successfully"}, status=status.HTTP_200_OK)
        except BloodStock.DoesNotExist:
            return Response({"error": "Blood group not found"}, status=status.HTTP_404_NOT_FOUND)

class BloodStatisticsView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        total_donors = BloodDonate.objects.values('user').distinct().count()
        total_requests = BloodRequest.objects.count()
        total_blood_units = BloodStock.objects.aggregate(total_units=Sum('units'))['total_units'] or 0
        total_approved_Brequests = BloodRequest.objects.filter(status='fulfilled').count()
        total_rejected_Brequests = BloodRequest.objects.filter(status='cancelled').count()
        total_approved_Drequests = BloodDonate.objects.filter(status='fulfilled').count()
        total_rejected_Drequests = BloodDonate.objects.filter(status='cancelled').count()

        stats = {
            'totalDonors': total_donors,
            'totalRequests': total_requests,
            'totalBloodUnit': total_blood_units,
            'totalApprovedRequests': (total_approved_Drequests+total_approved_Brequests),
            'totalRejectedRequests': (total_rejected_Drequests+total_rejected_Brequests),
        }
        return Response(stats, status=status.HTTP_200_OK)        


# def download_certificate(request, donation_id):
#     try:
#         # Fetch the donation record from the database using donation_id
#         donation = BloodDonate.objects.get(id=donation_id)
#     except BloodDonate.DoesNotExist:
#         return HttpResponse('Donation record not found.', status=404)

#     response = HttpResponse(content_type='application/pdf')
#     response['Content-Disposition'] = f'attachment; filename="certificate_{donation_id}.pdf"'

#     # Create a PDF using reportlab
#     p = canvas.Canvas(response, pagesize=letter)
#     p.drawString(100, 750, "Certificate of Blood Donation")
#     p.drawString(100, 720, f"Name: {donation.user.username}")
#     p.drawString(100, 700, f"Blood Group: {donation.blood_group}")
#     p.drawString(100, 680, f"Units Donated: {donation.units_donated}")
#     p.drawString(100, 660, f"Donation Date: {donation.donation_date.strftime('%B %d, %Y')}")
#     p.drawString(100, 640, "Thank you for your donation!")
#     p.showPage()
#     p.save()

#     return response

def download_certificate(request, donation_id):
    # Example username, replace with actual data retrieval
    username = "Vaibhav Movaliya"
    
    # Set up the file response
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename="certificate_{donation_id}.pdf"'
    
    # Create the PDF object, using the response object as its "file"
    c = canvas.Canvas(response, pagesize=letter)
    width, height = letter

    # Draw the background image (ensure the image path is correct)
    background_path = os.path.join('C:/Users/ADMIN/Downloads/background.png')
    c.drawImage(background_path, 0, 0, width=width, height=height, mask='auto')

    # Draw the outer border
    outer_margin = 0.5 * inch
    c.setStrokeColor(colors.black)
    c.setLineWidth(4)
    c.rect(outer_margin, outer_margin, width - 2 * outer_margin, height - 2 * outer_margin)

    # Draw the inner border
    inner_margin = outer_margin + 0.2 * inch
    c.setStrokeColor(colors.black)
    c.setLineWidth(2)
    c.rect(inner_margin, inner_margin, width - 2 * inner_margin, height - 2 * inner_margin)

    # Draw the star image (ensure the image path is correct)
    star_path = os.path.join('C:/Users/ADMIN/Downloads/Capture.png')
    c.drawImage(star_path, x=(width - 100) / 2, y=height - 200, width=100, height=100)

    # Set up styles and content
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(colors.blue)
    c.drawCentredString(width / 2, height - 180, "THANK YOU")

    c.setFont("Helvetica", 16)
    c.drawCentredString(width / 2, height - 220, "This certificate of appreciation is presented to")

    # Draw the recipient's name
    c.setFont("Helvetica-Bold", 22)
    c.drawCentredString(width / 2, height - 250, f"{username}")

    # Draw the donation information
    c.setFont("Helvetica", 16)
    c.drawCentredString(width / 2, height - 290, "For donating")
    c.drawCentredString(width / 2, height - 310, "To improve the welfare of people")
    c.drawCentredString(width / 2, height - 330, "And children in our organization")

    # Draw the organization seal and date
    c.setFont("Helvetica", 14)
    c.drawString(inner_margin + 0.5 * inch, inner_margin + 0.5 * inch, "Organization seal with date")
    c.drawString(width - inner_margin - 3.5 * inch, inner_margin + 0.5 * inch, f"Date: {date.today().strftime('%B %d, %Y')}")

    # Draw the signature image (ensure the image path is correct)
    signature_path = os.path.join('C:/Users/ADMIN/Downloads/signature.png')
    c.drawImage(signature_path, x=width - inner_margin - 2.5 * inch, y=inner_margin + 0.5 * inch, width=2 * inch, height=1 * inch, mask='auto')

    # Finalize the PDF
    c.save()

    return response