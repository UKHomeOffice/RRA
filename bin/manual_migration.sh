#! /bin/bash
set -e

export KUBE_NAMESPACE=rra-branch


export SCHEMA_ACTION=$1

kd='kd --timeout 10m --check-interval 5s'

$kd --delete -f kube/jobs/ms-schema-job.yml
$kd -f kube/jobs/ms-schema-job.yml
