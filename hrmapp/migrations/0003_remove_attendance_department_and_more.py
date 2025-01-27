# Generated by Django 5.0.6 on 2025-01-24 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hrmapp', '0002_remove_attendance_employee_attendance_department_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attendance',
            name='department',
        ),
        migrations.RemoveField(
            model_name='attendance',
            name='employee_name',
        ),
        migrations.RemoveField(
            model_name='attendance',
            name='position',
        ),
        migrations.AlterField(
            model_name='attendance',
            name='employee_id',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='status',
            field=models.CharField(max_length=50),
        ),
    ]
