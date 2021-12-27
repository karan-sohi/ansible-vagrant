# Ansible-Vagrant
Vagrant maanges the virtual environment on the local VirtualBox on Ubuntu version and Ansible is used to provision the 
In this project, Ansible is used to do the configration required to setup the application. 

Main playbook - The example.yaml file is a main playbook that has 4 ansible roles imported in it to provision the whole application on the VirtualBox VM by connecting it 
with Vagrant. 

![Application-Setup](https://github.com/karan-sohi/ansible-vagrant/blob/main/images/application-setup.png)

## Frontend Role
- Make sure Nginx and git is installed
- Nginx is enabled and running
- Nginx serve static files from the http_static_dir folder
- Make sure the folder http_static_dir exists and is accessible by Nginx
- Make sure Nginx redirects traffic to the backend server
- Make sure Nginx is restarted if its configuration is changed
- Make sure git clone of frontend source code somewhere and configure 

## Backend Role
- Make sure git is installed
- Make sure the user backend_user exists to run the backend service
- Make sure git clone of the backend source code somewhere
- make necessary changes in the database configuration file
- Create a systemd unit file
- Install and enable the backend service

## Database Role 
- Make sure MySQL is installed, enabled and started
- Harden the configuration of MySQL
- Make sure that a user and database are created according to the configurations in source code

## Nodejs Role
- Make sure Node 14 version is installed
