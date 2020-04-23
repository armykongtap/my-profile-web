from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view

from follow.models import FollowModel
from follow.serializers import FollowModelSerializer
from django.contrib.auth.models import User


@api_view(['GET', 'POST', 'DELETE'])
def follow_list(request):

    if request.method == 'GET':
        users = FollowModel.objects.all()
        serializer = FollowModelSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        follow = FollowModel.objects.filter(
            userId_A=data["userId_A"], userId_B=data["userId_B"])
        if follow:
            return HttpResponse(status=400)
        serializer = FollowModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201, json_dumps_params={'ensure_ascii': False})
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        data = JSONParser().parse(request)
        print(data)
        try:
            follow = FollowModel.objects.get(
                userId_A=data['userId_A'], userId_B=data['userId_B'])
        except FollowModel.DoesNotExist:
            return HttpResponse(status=404)
        follow.delete()
        return HttpResponse(status=204)


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


@api_view(['GET'])
def is_follow(request, userId_A, userId_B):

    if request.method == 'GET':
        try:
            follow = FollowModel.objects.get(
                userId_A=userId_A, userId_B=userId_B)
            return HttpResponse(status=200)

        except:
            return HttpResponse(status=404)


@api_view(['GET'])
def get_not_following(request, userId):
    allUser = set()
    followUser = set()
    followUser.add(userId)
    for i in User.objects.all():
        allUser.add(i.id)
    for i in FollowModel.objects.filter(userId_A=userId):
        followUser.add(i.userId_B)
    return JsonResponse(list(allUser-followUser), safe=False, json_dumps_params={'ensure_ascii': False})
