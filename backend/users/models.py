from django.db import models
import random


class UserModel(models.Model):
    userId = models.PositiveSmallIntegerField(primary_key=True)
    firstName = models.CharField(blank=True, default='', max_length=50)
    lastName = models.CharField(blank=True, default='', max_length=50)
    about = models.CharField(blank=True, default='', max_length=200)
    color = models.CharField(default='#FFFFFF',max_length=7)

    def __str__(self):
        return ("#" + self.userId + " " + self.firstName + " " + self.lastName)
