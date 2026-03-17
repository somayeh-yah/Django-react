from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from userauths.models import Profile, User

#CREATE A CUSTOM TOKEN SERIALIZER TO GENERATE AND REFRESH TOKEN
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    #@classmethod means that this method belongs to the orginal class and not the instance/ object of that class
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["initials"] = user.profile.initials
        token["image"] = str(user.profile.image) if user.profile.image else None 
        token['full_name'] = user.full_name
        token['email'] = user.email
        token['username'] = user.username
        token["role"] = user.role

        return token
    

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True) 

    class Meta:
        model = User
        fields = ['full_name', 'email', 'password','password2']

#Validate if password matches password 2 and returns the attribute
    def validate(self, attr):
        if attr['password'] != attr['password2']:
            raise serializers.ValidationError({"password": "Password did't match"})
        
        return attr
    
    #Create a new user based on the validated data
    def create(self, validated_data):
        user = User.objects.create(
            full_name=validated_data['full_name'],
            email=validated_data['email'],
            role='employee'

        )

        email_username, _ = user.email.split('@')
        user.username = email_username
        user.set_password(validated_data['password'])
        user.save()

        return user
       

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'full_name']

class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['full_name', 'country', 'about', 'image', 'initials']
        read_only_fields = ['initials']
        extra_kwargs = {
            'full_name': {'required': False},
            'image': {'required': False},
        }   