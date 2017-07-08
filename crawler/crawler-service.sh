#!/bin/sh
# Package Varables
NAME="anime-crawler-server"  # "$(echo "$SYNOPKG_PKGNAME" | awk '{print tolower($0)}' | sed -e 's/ /_/g')"

# Start & Stop Varables
PID_FILE="/var/run/${NAME}.pid"


DaemonStart() {
	DaemonStatus
	if [ $? == 0 ]; then
		nohup node /volume1/Downloads/anime-crawler-server/app.js &
		echo $! > "$PID_FILE"
	else
		echo "${NAME} already running."
	fi
}

DaemonStop() {
	DaemonStatus
	if [ $? == 1 ]; then
		echo "Stopping ${NAME}."
		kill $(cat "$PID_FILE");
		rm -f "$PID_FILE"

		sleep 3
	else
		echo "Nothing to stop for ${NAME}."
	fi
}

DaemonStatus() {
	if [ -f "$PID_FILE" ]; then
		PID=$(cat "$PID_FILE")

		if [ -n "$(ps | grep $PID | grep -vn "grep $PID")" ]; then
			echo "${NAME} is running ..."
			return 1  # is running
		else
			echo "${NAME} is NOT running ..."
			rm -f ${PID_FILE}  # Remove Invalid PID
			return 0  # is NOT running
		fi
	else
		echo "${NAME} is NOT running ...."
		return 0  # is NOT running
	fi
}

case $1 in
	start)
		DaemonStart
		sleep 1
		DaemonStatus
		exit $(( ! $? ))  # [ $? == 1 ] && exit 0 || exit 1  # this if statement flips the boolean outcome.
	;;
	stop)
		DaemonStop
		sleep 1
		DaemonStatus
		exit $?
	;;
	restart)
		DaemonStop
		sleep 10
		DaemonStart
		sleep 1
		DaemonStatus
		exit $(( ! $? ))  # this if statement flips the boolean outcome.
	;;
	status)
		DaemonStatus
		exit $(( ! $? ))  # this if statement flips the boolean outcome.
	;;
	*)
		echo "Usage: $0 {start|stop|restart|status}"
		exit 1
	;;
esac
