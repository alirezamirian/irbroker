set ADDON_NAME=irbroker
set PATH_TO_CFX="C:\addon-sdk-1.16\bin"
set WORKING_DIR=%~dp0

cd %WORKING_DIR%
call %PATH_TO_CFX%\activate
call %PATH_TO_CFX%\cfx xpi
wget --post-file=%ADDON_NAME%.xpi http://127.0.0.1:8888/
pause