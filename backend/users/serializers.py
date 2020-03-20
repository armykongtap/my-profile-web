from rest_framework import serializers
from users.models import UserModel


class UserModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = ['userId', 'firstName', 'lastName', 'about']
