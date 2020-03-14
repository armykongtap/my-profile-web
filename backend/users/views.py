from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


@api_view(['GET'])
@authentication_classes([SessionAuthentication, BasicAuthentication])
@permission_classes([IsAuthenticated])
def HelloView(request, format=None):
    content = {'message': 'Hello, World!'}
    return Response(content)


@api_view(['POST'])
def register(request):

    data = request.data
    if request.method == 'POST':
        try:
            user = User.objects.create_user(
                data['username'], 'none', data['password'])
            return Response(1, status=status.HTTP_201_CREATED)
        except:
            return Response(0, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def login(request):

    data = request.data
    if request.method == 'POST':
        user = authenticate(
            username=data['username'], password=data['password'])
        request.user = user
        if user is not None:
            login(request._request)
            return Response(user.username, status=status.HTTP_201_CREATED)
        else:
            return Response("GUEST", status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def logout(request):
    logout(request._request)
    return Response(1, status=status.HTTP_201_CREATED)
