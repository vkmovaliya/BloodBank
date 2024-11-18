from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator

class CustomUser(AbstractUser):
    blood_group = models.CharField(max_length=10, blank=True, null=True)
    mobile_no = models.CharField(max_length=15, blank=True, null=True)  # Mobile number field
    birthdate = models.DateField(blank=True, null=True)  # Birthdate field
    image = models.ImageField(upload_to='profile_images/', blank=True, null=True)  # Profile image field




class BloodDonate(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    donation_date = models.DateField()
    blood_group = models.CharField(max_length=10)
    units_donated = models.PositiveIntegerField()
    age = models.PositiveIntegerField(default=0)  
    weight = models.PositiveIntegerField(default=0)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female')],default='') 
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('fulfilled', 'Fulfilled'), ('cancelled', 'Cancelled')],default='pending')

    def __str__(self):
        return f"{self.user.username} - {self.donation_date}"

class BloodRequest(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    blood_group = models.CharField(max_length=10)
    units_requested = models.IntegerField(validators=[MinValueValidator(1)])
    request_date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('fulfilled', 'Fulfilled'), ('cancelled', 'Cancelled')], default='pending')
    full_name = models.CharField(max_length=255, blank=True)  
    email = models.EmailField(blank=True)  
    mobile_no = models.CharField(max_length=15, blank=True)  
    city = models.CharField(max_length=100, blank=True)  
    gender = models.CharField(max_length=10, blank=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.blood_group} - {self.units_requested} units"    

class BloodStock(models.Model):
    BLOOD_GROUP_CHOICES = [
        ('A+', 'A+'),
        ('B+', 'B+'),
        ('O+', 'O+'),
        ('AB+', 'AB+'),
        ('A-', 'A-'),
        ('B-', 'B-'),
        ('O-', 'O-'),
        ('AB-', 'AB-'),
    ]

    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES, unique=True)
    units = models.IntegerField(validators=[MinValueValidator(0)])  # Units in ml

    def __str__(self):
        return f"{self.blood_group}: {self.units}ml"   