# ucluster-skaffold-vote

### Example: Voting-app

This is an example demonstrating:

* **building** a simple web app (in-cluster) built with Docker
* **deploying** the app pods using `kubectl` and `kustomize`

Make sure you have `skaffold` installed. 

### Run via Workflow

1. Open a PR, and the workflow will get triggered. 

2. The workflow creates a uCluster and builds the images within the cluster using `kaniko`.

3. Access the uCluster using the Uffizzi CLI. The vote and result endpoints can be found within the ingresses on the uCluster

### Run via CLI

1. Clone this repo

2. Run the following command in the context of the repo to start skaffold in dev mode. Make sure you are also in the context of your ucluster where you want to test out your application. By default it watches for file changes. So as you update any code a redeploy will be triggered. Happy skaffolding with Uffizzi ! 

**NOTE: We are using the skaffold dev command when running via the CLI, this continuously watches for changes made to any of the files and re-deploys the necessary images**

```
skaffold dev --kubeconfig kubeconfig --default-repo registry.uffizzi.com -f skaffold.yaml
```
