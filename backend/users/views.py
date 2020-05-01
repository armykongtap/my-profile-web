from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import random

from users.models import UserModel
from users.serializers import UserModelSerializer


@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def HelloView(request, format=None):
    content = {'message': 'Hello, World!'}
    return Response(content)


@api_view(['GET', 'POST'])
def user_list(request):

    if request.method == 'GET':
        users = UserModel.objects.all()
        serializer = UserModelSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params={'ensure_ascii': False})

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        data['color'] = "#" + \
            ''.join([random.choice('0123456789ABCDEF') for j in range(6)])
        serializer = UserModelSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201, json_dumps_params={'ensure_ascii': False})
        return JsonResponse(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):

    try:
        user = UserModel.objects.get(pk=pk)
    except UserModel.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = UserModelSerializer(user)
        return JsonResponse(serializer.data, json_dumps_params={'ensure_ascii': False})
    elif request.method == 'PUT':
        serializer = UserModelSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=204)
