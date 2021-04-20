<h1 align="center">
  Neat Résumé
</h1>

<p align="center">
  easy-to-use static résumé/CV(Curriculum Vitae) website builder
</p>


## What is Neat Résumé

**Neat Résumé** is a static website builder for **Résumé** and **Curriculum Vitae**.
From the template, you can easily create your own resume website with YAML formatted data.

The generated website contains print and pdf download buttons.


## Donation

<div align="center">
  <a href="https://ko-fi.com/C0C34CYVJ">
    <img alt="Donate with Ko-Fi" src="https://ko-fi.com/img/githubbutton_sm.svg" />
  </a>
  <a href="https://paypal.me/jhyecheol">
    <img alt="Donate with PayPal" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" />
  </a>
</div>

<br />

Help keep this project and demo-website alive!!
All donation regardless of amounts are welcome!!

You can choose to donate using [PayPal](https://paypal.me/jhyecheol) and [Ko-Fi](https://ko-fi.com/C0C34CYVJ). Ko-Fi also accepts credit/debit card payments.


## Preview


## How to Use

You need to modify YAML files in [`data`]() directory to modify contents of each section.


### Dependencies/Environment

Developed and tested with `Ubuntu 20.04.2 LTS` and `Node v.14.16.0`, 
but expected to work with any environment with nodejs.

To prevent from the users mistakenly not providing required information, [ajv](https://ajv.js.org/) is used.


### Usage/Scripts

Here is the list for supported npm/yarn scripts.
These are used to lint, test, build, and run the code.

1. `lint`: lint the code
2. `lint:fix`: lint the code and try auto-fix
3. `build`: generate static websites (destination: `dist` directory)
4. `start`: start localhost to preview the website
   (Currently, it does not detect any file changes. You may need to restart the preview server once you modify template/data).
5. `clean`: remove the compiled files


## Contact

You are allowed to modify my `yaml` file to create your own résumé website.
However, you must not use my resume for any purpose without **written** consent.

If you have any inquires, feel free to post an issue or email me.
If you modified the code to create your own template,
you are encouraged to share your work with others.
