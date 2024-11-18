# myapp/admin.py

from django.contrib import admin
from .models import CustomUser, BloodDonate,BloodRequest,BloodStock

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('id','username', 'email', 'first_name', 'last_name', 'blood_group', 'mobile_no', 'birthdate')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    list_filter = ('id','blood_group', 'birthdate')

# BloodDonate admin class
class BloodDonateAdmin(admin.ModelAdmin):
    list_display = ('id','user', 'donation_date', 'blood_group', 'units_donated','age', 'weight', 'gender', 'status')
    list_filter = ('donation_date', 'blood_group', 'status')
    search_fields = ('user__username', 'blood_group')

class BloodRequestAdmin(admin.ModelAdmin):
    list_display = ('id','user','full_name','gender','email','mobile_no', 'blood_group', 'units_requested', 'request_date', 'status')
    list_filter = ('status', 'blood_group')
    search_fields = ('user__username', 'blood_group')
    ordering = ('-request_date',)

@admin.register(BloodStock)
class BloodStockAdmin(admin.ModelAdmin):
    list_display = ('blood_group', 'units')
    search_fields = ('blood_group',)    

admin.site.register(BloodRequest, BloodRequestAdmin)    

# Register BloodDonate model
admin.site.register(BloodDonate, BloodDonateAdmin)
# Registering models with the admin site
admin.site.register(CustomUser, CustomUserAdmin)

