#!/bin/bash

# Pull Assets
#
# Pull staging assets down from a remote to local
#
# @author    nystudio107
# @copyright Copyright (c) 2017 nystudio107
# @link      https://nystudio107.com/
# @package   craft-scripts
# @since     1.1.0
# @license   MIT

# Get the directory of the currently executing script
DIR="$(dirname "${BASH_SOURCE[0]}")"

# Include files
INCLUDE_FILES=(
            "common/defaults.sh"
            ".env.sh"
            "common/common_env.sh"
            )
for INCLUDE_FILE in "${INCLUDE_FILES[@]}"
do
    if [[ ! -f "${DIR}/${INCLUDE_FILE}" ]] ; then
        echo "File ${DIR}/${INCLUDE_FILE} is missing, aborting."
        exit 1
    fi
    source "${DIR}/${INCLUDE_FILE}"
done

# Make sure the local assets directory exists
echo "Ensuring asset directory exists at '${LOCAL_ASSETS_PATH}'"
mkdir -p "${LOCAL_ASSETS_PATH}"

# Pull down the asset dir files via rsync
for DIR in "${LOCAL_ASSETS_DIRS[@]}"
do
    rsync -F -L -a -z -e "ssh -p ${STAGING_SSH_PORT}" --delete-after --progress "${STAGING_SSH_LOGIN}:${STAGING_ASSETS_PATH}${DIR}" "${LOCAL_ASSETS_PATH}"
    echo "*** Synced assets from ${STAGING_ASSETS_PATH}${DIR}"
done

# Make sure the Craft files directory exists
echo "Ensuring Craft files directory exists at '${LOCAL_CRAFT_FILES_PATH}'"
mkdir -p "${LOCAL_CRAFT_FILES_PATH}"

# Pull down the Craft-specific dir files via rsync
for DIR in "${LOCAL_CRAFT_FILE_DIRS[@]}"
do
    rsync -F -L -a -z -e "ssh -p ${STAGING_SSH_PORT}" --delete-after --progress "${STAGING_SSH_LOGIN}:${STAGING_CRAFT_FILES_PATH}${DIR}" "${LOCAL_CRAFT_FILES_PATH}"
    echo "*** Synced assets from ${STAGING_CRAFT_FILES_PATH}${DIR}"
done

# Normal exit
exit 0
