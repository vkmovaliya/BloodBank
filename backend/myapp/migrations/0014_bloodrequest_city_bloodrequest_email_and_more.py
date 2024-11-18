# Generated by Django 5.0.7 on 2024-09-13 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0013_blooddonate_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='bloodrequest',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='bloodrequest',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name='bloodrequest',
            name='full_name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='bloodrequest',
            name='gender',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AddField(
            model_name='bloodrequest',
            name='mobile_no',
            field=models.CharField(blank=True, max_length=15),
        ),
    ]
