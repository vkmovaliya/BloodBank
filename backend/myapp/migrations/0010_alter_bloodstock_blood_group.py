# Generated by Django 5.0.7 on 2024-08-30 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0009_bloodstock'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloodstock',
            name='blood_group',
            field=models.CharField(choices=[('A+', 'A+'), ('B+', 'B+'), ('O+', 'O+'), ('AB+', 'AB+'), ('A-', 'A-'), ('B-', 'B-'), ('O-', 'O-'), ('AB-', 'AB-')], max_length=3, unique=True),
        ),
    ]
