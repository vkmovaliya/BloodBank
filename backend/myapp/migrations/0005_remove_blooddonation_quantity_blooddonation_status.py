# Generated by Django 5.0.7 on 2024-08-25 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_blooddonation'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blooddonation',
            name='quantity',
        ),
        migrations.AddField(
            model_name='blooddonation',
            name='status',
            field=models.CharField(default='Pending', max_length=10),
        ),
    ]
