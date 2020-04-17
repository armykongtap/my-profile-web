from rest_framework import serializers
from users.models import UserModel

# from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id','username')

# class UserModelSerializer(serializers.ModelSerializer):
#     user = UserSerializer(required=True)

#     class Meta:
#         model = UserModel
#         fields = ('user', 'firstName','lastName','about')

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('userId', 'firstName','lastName','about')