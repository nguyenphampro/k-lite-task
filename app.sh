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
        echo "2) Build product"
        echo "3) Build product with local"
        echo "4) Build product NOT MIN"
        echo "5) Build product with local NOT MIN"
        echo "u) Updrage Package"
        echo "q) Quit"
        echo

        read choice

        case $choice in
            '1') npm run serve;;
            '2') npm run pro;;
            '3') npm run prod;;
            '2') npm run pro-no;;
            '3') npm run prod-no;;
            'u') npm run update;;
            'q') ;;
            *)   printf "\033[0;33mMenu item is not available, try again!\033[0m\n";;
        esac
done

exit 0
