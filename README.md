# NxPackaged

> Demonstrates ng-packagr alongside Nx Workspace.

Develop your libraries and applications in a monorepo.
Build distribution-ready libraries in Angular Package Format.


## Transcript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0 using [Nrwl Nx](https://nrwl.io/nx).

The following transcript documents reproducible steps to set up this project.

#### Create Nx Worksapce

First, [create an Nx Workspace](https://nrwl.io/nx/guide-nx-workspace).
This repository was created with the sandbox install script:

```bash
$ curl -fsSL https://raw.githubusercontent.com/nrwl/nx/master/packages/install/install-next.sh | bash -s nx-packaged
```

Alternatively, you could convert an existing Angular CLI project to Nx Workspace.
Please see the Nx documentation how to do that.

#### Create an app

For show-casing and documenting your library, [create an Angular app](https://nrwl.io/nx/guide-nx-workspace#create-an-app) in the Nx Workspace.

```bash
$ ng generate app one-app
```

#### Create a library

Now, [let's create one library for reusable business code and a second library for reusable Angular building blocks](https://nrwl.io/nx/guide-nx-workspace#create-a-lib):

```bash
$ ng generate lib one-lib
$ ng generate lib two-lib --ngmodule
```

#### Develop libraries

Let's generate a component in the Angular library:

```bash
$ ng generate component myButton --app=mymodule
```

And let's also implement some very veeee-ry smart business code in `one-lib.ts`:

```ts
export class OneLib {

  public foo(): string {
    return "bar";
  }
}
```
