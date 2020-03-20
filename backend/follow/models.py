from django.db import models
from users.models import UserModel


class FollowModel(models.Model):
    followId = models.AutoField(primary_key=True)
    userId_A = models.PositiveSmallIntegerField()
    userId_B = models.PositiveSmallIntegerField()

    def __str__(self):
        return ("#" + self.followId + " " + self.userId_A + " follow " + self.userId_B)
