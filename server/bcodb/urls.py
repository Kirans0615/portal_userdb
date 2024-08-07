# bcodb/urls.py

"""BCODB URLs
"""

from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from bcodb.apis import (
    getRouts,
    AddBcodbApi,
    RemoveBcodbApi,
    AddTempDraftBcoAPI,
    DeleteTempDraftBco,
    GetTempDraftBcoAPI,
    ResetBcodbTokenApi
)

urlpatterns = [
    path("", getRouts),
    path("bcodb/add/", AddBcodbApi.as_view()),
    path("bcodb/remove/", RemoveBcodbApi.as_view()),
    path("bcodb/draft_bco/add", AddTempDraftBcoAPI.as_view()),
    path("bcodb/draft_bco/get", GetTempDraftBcoAPI.as_view()),
    path("bcodb/draft_bco/delete", DeleteTempDraftBco.as_view()),
    path("bcodb/reset_token/", ResetBcodbTokenApi.as_view()),
]
