# Generated by Django 5.0.6 on 2025-01-24 08:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hrmapp', '0004_payroll'),
    ]

    operations = [
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('report_type', models.CharField(max_length=100)),
                ('report_data', models.JSONField()),
                ('generated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
