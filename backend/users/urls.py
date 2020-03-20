from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from users import views

urlpatterns = [
    path('users/', views.user_list),
    path('users/<int:pk>/', views.user_detail),

]
