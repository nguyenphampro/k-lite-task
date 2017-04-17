#!/bin/bash
printf "\033[1;36m=====================================\033[0m\n"
printf "\033[1;36mWelcome to the BIZ4X-Mobile Application. This is the products of 4xLabs\033[0m\n"
printf "\033[1;36mCopyright 2017\033[0m\n"
printf "\033[1;36mBuild by BIZ4X Team\033[0m\n"
printf "\033[1;36m=====================================\033[0m\n"
printf "\033[0;33mAre You ready to run?!?\033[0m\n"

choice=""

while [ "$choice" != "q" ]
do
        echo
        echo "Please choice a selection!"
        echo "1) Run dev"
        echo "2) Run Lab"
        echo "3) Build ios on device"
        echo "4) Build android on device"
        echo "5) Build ios on Ionic Cloud"
        echo "6) Build android on Ionic Cloud"
        echo "7) Add Platform"
        echo "8) Add Resources"
        echo "9) Remove Platform"
        echo "b) Build Release"
        echo "u) Updrage Package"
        echo "q) Quit"
        echo

        read choice

        case $choice in
            '1') npm run dev;;
            '2') npm run lab;;
            '3') npm run ios:dev;;
            '4') npm run android:dev;;
            '5') npm run ios:ionic;;
            '6') npm run android:ionic;;
            '7') sh platform.sh;;
            '8') ionic resources;;
            '9') ionic platform remove ios && ionic platform remove androis && ionic platform remove windows;;
            'b') npm run ios:release && npm run android:release;;
            'u') npm run update;;
            'q') ;;
            *)   printf "\033[0;33mMenu item is not available, try again!\033[0m\n";;
        esac
done

exit 0
