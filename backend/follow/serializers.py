from rest_framework import serializers
from follow.models import FollowModel


class FollowModelSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FollowModel
        fields = ['followId', 'userId_A', 'userId_B']
