from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from follow import views

urlpatterns = [
    path('follows/', views.follow_list),
    path('follows/<int:pk>/', views.follow_detail),
    path('follower/<int:userId>/', views.get_follower),
    path('following/<int:userId>/', views.get_following),
    path('unfollow/', views.follow_list),
    path('isfollow/<int:userId_A>&<int:userId_B>/', views.is_follow),
    path('suggest/<int:userId>/', views.get_not_following)
]
