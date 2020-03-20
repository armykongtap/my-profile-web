from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view

from follow.models import FollowModel
from follow.serializers import FollowModelSerializer


@api_view(['GET', 'POST'])
def follow_list(request):

    if request.method == 'GET':
        users = FollowModel.objects.all()
        serializer = FollowModelSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = FollowModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201, json_dumps_params={'ensure_ascii': False})
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'DELETE'])
def follow_detail(request, pk):

    try:
        follow = FollowModel.objects.get(pk=pk)
    except FollowModel.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = FollowModelSerializer(follow)
        return JsonResponse(serializer.data, json_dumps_params={'ensure_ascii': False})
    elif request.method == 'DELETE':
        follow.delete()
        return HttpResponse(status=204)


@api_view(['GET'])
def get_follower(request, userId):

    if request.method == 'GET':
        follows = FollowModel.objects.filter(userId_B=userId)
        serializer = FollowModelSerializer(follows, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})


@api_view(['GET'])
def get_following(request, userId):

    if request.method == 'GET':
        follows = FollowModel.objects.filter(userId_A=userId)
        serializer = FollowModelSerializer(follows, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})
