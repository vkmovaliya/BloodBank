from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser,BloodDonate,BloodRequest,BloodStock


# serializers.py


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = (
            'id',
            'username', 'password', 'first_name', 'last_name', 'email',
            'blood_group', 'mobile_no', 'birthdate', 'image'
        )
        extra_kwargs = {
            'password': {'write_only': True},
            'image': {'required': False}  # Make image optional
        }

    def validate_username(self, value):
        if CustomUser.objects.filter(username=value).exists():
            raise serializers.ValidationError("Username already exists.")
        return value

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            blood_group=validated_data.get('blood_group', ''),
            mobile_no=validated_data.get('mobile_no', ''),
            birthdate=validated_data.get('birthdate', None),
            image=validated_data.get('image', None)
        )
        return user
        
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if user is None:
            raise serializers.ValidationError('Invalid credentials')
        # Return only user data, not the password
        return {
            'user': user
        }

class AdminLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'mobile_no', 'blood_group']    

class BloodDonateSerializer(serializers.ModelSerializer):
    user_first_name = serializers.CharField(source='user.first_name', read_only=True)
    user_last_name = serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = BloodDonate
        fields = ['id','user','user_first_name', 'user_last_name', 'donation_date', 'blood_group', 'units_donated','age', 'weight', 'gender', 'status']
        
class BloodRequestSerializer(serializers.ModelSerializer):
    user_first_name = serializers.CharField(source='user.first_name', read_only=True)
    user_last_name = serializers.CharField(source='user.last_name', read_only=True)

    class Meta:
        model = BloodRequest
        fields = ['id', 'user', 'user_first_name', 'user_last_name', 'blood_group', 'units_requested', 'request_date', 'status', 'full_name', 'email', 'mobile_no', 'city', 'gender']        

class BloodStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodStock
        fields = ['blood_group', 'units']        