from django.db import models


class UserModel(models.Model):
    userId = models.PositiveSmallIntegerField(primary_key=True)
    firstName = models.CharField(blank=True, default='', max_length=50)
    lastName = models.CharField(blank=True, default='', max_length=50)
    about = models.CharField(blank=True, default='', max_length=100)

    def __str__(self):
        return ("#" + self.userId + " " + self.firstName + " " + self.lastName)
