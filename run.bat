@ECHO OFF
set ESC=
set Red=%ESC%[91m
set White=%ESC%[37m
set Blue=%ESC%[94m
set Green=%ESC%[92m

SET /P PLATFORM=%Green%Script Written By Rajat Gupta, Choose a PLATFORM [type 'a' for android,'i' for ios or 'w' for windows]%Green% :

2>NUL CALL :CASE_%PLATFORM% # jump to :CASE_a, :CASE_i, :CASE_w.
IF ERRORLEVEL 1 CALL :DEFAULT_CASE # If label doesn't exist

ECHO %Green%Done%White%.
EXIT /B

:CASE_a
  for %%d in (platforms\android\build\outputs\apk platforms\android\assets\www www ) do rmdir "%%~d" /s /q
  start ionic cordova run android --device -l --ssl --debug --address=192.168.29.78
  GOTO END_CASE
:CASE_i
  for %%d in (platforms\ios\AppPackages platforms\ios\build www ) do rmdir "%%~d" /s /q
  GOTO END_CASE
:CASE_w
  for %%d in (platforms\windows\AppPackages platforms\windows\build www ) do rmdir "%%~d" /s /q
  GOTO END_CASE
:DEFAULT_CASE
  ECHO %Red%Unknown platform : "%PLATFORM%". Please try again.
  GOTO END_CASE
:END_CASE
  VER > NUL # reset ERRORLEVEL
  GOTO :EOF # return from CAL
  