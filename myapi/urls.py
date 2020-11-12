from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from .views import UserViewSet, HeroViewSet, BookViewSet
from . import views


router = routers.DefaultRouter()
router.register(r'heros', HeroViewSet)
router.register('users', UserViewSet)
router.register('books', BookViewSet)

# Wire up out API using automatic URL routing.
# Additionally, we include login URLS for the browsable API called myapi.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    # crud for tasks model starts here
    path('', views.apiOverview, name="api-overview"),
	path('task-list/', views.taskList, name="task-list"),
	path('task-detail/<str:pk>/', views.taskDetail, name="task-detail"),
	path('task-create/', views.taskCreate, name="task-create"),

	path('task-update/<str:pk>/', views.taskUpdate, name="task-update"),
	path('task-delete/<str:pk>/', views.taskDelete, name="task-delete"),
	path('login/',views.login, name ='login'),
]
