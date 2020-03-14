from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from users import views

urlpatterns = [
    path('hello/', views.HelloView, name='hello'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('users/register/', views.register),
    path('users/login/', views.login),
    path('users/logout/', views.logout),
]
