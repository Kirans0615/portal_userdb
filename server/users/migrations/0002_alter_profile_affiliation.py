# Generated by Django 4.1.5 on 2023-02-01 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='affiliation',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
    ]
