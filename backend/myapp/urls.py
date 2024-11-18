# # myapp/urls.py

# from django.urls import path
# from .views import SignupView, LoginView, CustomLogoutView, UserProfileView,AdminLoginView,BloodDonateAPIView, BloodDonateListView, BloodRequestListCreateView,UserListView,BloodRequestListView,BloodDonateStatusUpdateView,BloodRequestStatusUpdateView,BloodDonateListViewadmin

# urlpatterns = [
#     path('signup/', SignupView.as_view(), name='signup'),
#     path('login/', LoginView.as_view(), name='login'),
#     path('logout/', CustomLogoutView.as_view(), name='logout'),
#     path('user-profile/<str:username>/', UserProfileView.as_view(), name='user-profile'),
#     path('admin-login/', AdminLoginView.as_view(), name='admin_login'),
#     path('blood-donate/', BloodDonateAPIView.as_view(), name='blood-donate'),
#     path('api/blood-donations/', BloodDonateListView.as_view(), name='blood-donate-list'),
#     path('blood-requests/', BloodRequestListCreateView.as_view(), name='blood-request-list-create'),
#     path('api/blood-requests/', BloodRequestListView.as_view(), name='blood-request-list'),
#     path('api/users/', UserListView.as_view(), name='user-list'),
#     path('admin/blood-donates/', BloodDonateListViewadmin.as_view(), name='blood_donate_list1'),
#     # path('api/blood-donates/<int:pk>/update-status/', BloodDonateStatusUpdateView.as_view(), name='blood-donate-update-status'),
#     # path('admin/blood-requests', BloodRequestStatusUpdateView.as_view(), name='blood-request-update-status'),
# ]
# myapp/urls.py
from django.urls import path
from .views import (
    SignupView, LoginView, CustomLogoutView, UserProfileView, AdminLoginView,
    BloodDonateAPIView, BloodDonateListView, BloodRequestListCreateView,
    UserListView, BloodRequestListView, BloodDonateStatusUpdateView,
    BloodRequestStatusUpdateView, BloodDonateListViewadmin,BloodRequestListViewadmin,BloodStockList,UpdateBloodStock,BloodStatisticsView,download_certificate
)

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', CustomLogoutView.as_view(), name='logout'),
    path('user-profile/<str:username>/', UserProfileView.as_view(), name='user-profile'),
    path('admin-login/', AdminLoginView.as_view(), name='admin_login'),
    path('blood-donate/', BloodDonateAPIView.as_view(), name='blood-donate'),
    path('api/blood-donations/<int:userId>/', BloodDonateListView.as_view(), name='blood-donate-list'),
    path('blood-requests/', BloodRequestListCreateView.as_view(), name='blood-request-list-create'),
    path('api/blood-requests/<int:userId>/', BloodRequestListView.as_view(), name='blood-request-list'),
    path('api/users/', UserListView.as_view(), name='user-list'),
    path('apinew/blood-donates/', BloodDonateListViewadmin.as_view(), name='blood_donate_list1'),
    path('apinew/blood-requests/', BloodRequestListViewadmin.as_view(), name='blood_donate_list1'),
    path('api/blood-donates/<int:id>/', BloodDonateStatusUpdateView.as_view(), name='blood-donate-update-status'),
    path('blood-requests/<int:id>/', BloodRequestStatusUpdateView.as_view(), name='blood-request-update-status'),
    path('api/bloodstock/', BloodStockList.as_view(), name='bloodstock-list'),
    path('api/update-stock/', UpdateBloodStock.as_view(), name='update-stock'),
    path('api/blood-stock/<str:blood_group>/', UpdateBloodStock.as_view(), name='update-stock'),
    path('api/statistics/', BloodStatisticsView.as_view(), name='blood_statistics'),
    path('api/download-certificate/<int:donation_id>/', download_certificate, name='download_certificate'),
   

]
