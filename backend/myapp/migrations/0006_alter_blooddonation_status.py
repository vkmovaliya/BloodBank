# Generated by Django 5.0.7 on 2024-08-25 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_remove_blooddonation_quantity_blooddonation_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blooddonation',
            name='status',
            field=models.CharField(default='Pending', max_length=20),
        ),
    ]
