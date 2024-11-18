# Generated by Django 5.0.7 on 2024-08-27 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0008_alter_blooddonate_blood_group_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='BloodStock',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('blood_group', models.CharField(max_length=3, unique=True)),
                ('units', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
