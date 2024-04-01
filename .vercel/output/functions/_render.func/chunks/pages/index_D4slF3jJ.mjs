/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, j as renderComponent, k as renderHead } from '../astro_B9FHOcHs.mjs';

const $$Astro$2 = createAstro();
const $$Thankyou = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Thankyou;
  let { isSubmitted, emailFromUser } = Astro2.props;
  console.log(isSubmitted);
  return renderTemplate`${maybeRenderHead()}<main> <div id="thanyou-submission"${addAttribute(`${isSubmitted ? "visible" : "invisible hidden"} text-dark-slate-grey bg-white h-screen md:h-min md:max-w-lg md:mx-auto flex flex-col-reverse md:flex-row rounded-2xl md:p-4`, "class")}> <section class="w-3/4 mx-auto space-y-8 my-6"> <img src="/images/icon-success.svg" alt="success icon"> <h1 class="font-bold text-4xl md:text-5xl py-4 md:py-0 my-4 md:mb-2 md:mt-4">
Thank you for subscribing.
</h1> <p>
A confirmation email has been sent to <span class="font-bold">${emailFromUser}</span>. Please open it and click the button inside to confirm your subscription.
</p> <button type="reset" class="btn-global" id="dismiss" @onclick="clearForm();">Dismiss Message</button> </section> </div> </main> `;
}, "/Users/digitap/Documents/FrontendMentor/newsletter-signup/src/components/Thankyou.astro", void 0);

const $$Astro$1 = createAstro();
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  let isSubmitted = false;
  let emailFromUser = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email");
      if (email) {
        isSubmitted = true;
        emailFromUser = email;
      }
      console.log(email);
    } catch (err) {
      console.error(err);
    }
  }
  return renderTemplate`${maybeRenderHead()}<main class=""> <div id="main-wrapper"${addAttribute(`${isSubmitted ? "invisible hidden" : "visible"} text-dark-slate-grey bg-white h-screen md:h-min md:max-w-4xl md:mx-auto flex flex-col-reverse md:flex-row rounded-2xl md:p-4`, "class")}> <section id="content-section" class="mx-auto grow md:grow-0 grid grid-cols-1 items-start w-4/5 md:w-3/5"> <div class="md:w-3/4 md:mx-auto"> <h1 class="font-bold text-4xl md:text-5xl py-4 md:py-0 my-4 md:mb-2 md:mt-4">
Stay updated!
</h1> <p class="py-2 md:py-2">
Join 60,000+ product managers receiving monthly updates on:
</p> <div id="list-updates" class="py-4 mt-4 md:mt-0"> <ul class="space-y-6 list-image-[url(/images/icon-list.svg)] list-inside"> <li>Product discovery and building what matters</li> <li>Measuring to ensure updates are a success</li> <li>And much more!</li> </ul> </div> <form method="POST" id="form"> <fieldset class="flex flex-col items-start"> <label for="email" class="font-bold text-sm py-3">Email address</label> <input type="email" name="email" class="border border-grey-color rounded-lg focus:ring-grey-color w-full px-4 py-2" required> <button type="submit" class="btn-global hover:bg-gradient-to-r from-tomato to-orange-500 hover:shadow-lg hover:shadow-tomato">Subscribe to monthly newsletter</button> </fieldset> </form> </div> </section> <section id="image-section" class="grow-0 self-stretch"> <picture> <source media="(max-width: 760px)" srcset="/images/illustration-sign-up-mobile.svg"> <source media="(min-width: 760.99px)" srcset="/images/illustration-sign-up-desktop.svg"> <img class="w-full" src="/images/illustration-sign-up-desktop.svg" alt="Newsletter signup illustration"> </picture> </section> </div> </main> ${renderComponent($$result, "Thankyou", $$Thankyou, { "isSubmitted": isSubmitted, "emailFromUser": emailFromUser })} `;
}, "/Users/digitap/Documents/FrontendMentor/newsletter-signup/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon-32x32.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Newsletter sign-up form</title><meta name="description" content="Sign up for our newsletter to stay updated with updates about our product."><!-- Facebook Meta Tags --><meta property="og:url" content="https://newsletter-signup-rosy.vercel.app/"><meta property="og:type" content="website"><meta property="og:title" content="Newsletter sign-up form"><meta property="og:description" content="Sign up for our newsletter to stay updated with updates about our product."><meta property="og:image" content="https://res.cloudinary.com/drxurk7lu/image/upload/v1711833131/newslettersignup/Newsletter_sign-up_form_12.10am_03-31_1_jtywmy.jpg"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="newsletter-signup-rosy.vercel.app"><meta property="twitter:url" content="https://newsletter-signup-rosy.vercel.app/"><meta name="twitter:title" content="Newsletter sign-up form"><meta name="twitter:description" content="Sign up for our newsletter to stay updated with updates about our product."><meta name="twitter:image" content="https://res.cloudinary.com/drxurk7lu/image/upload/v1711833131/newslettersignup/Newsletter_sign-up_form_12.10am_03-31_1_jtywmy.jpg">${renderHead()}</head> <body class="bg-dark-slate-grey"> <div id="body-container" class="min-h-screen md:flex md:items-center md:justify-center"> ${renderComponent($$result, "Main", $$Main, {})} </div> </body></html>`;
}, "/Users/digitap/Documents/FrontendMentor/newsletter-signup/src/pages/index.astro", void 0);

const $$file = "/Users/digitap/Documents/FrontendMentor/newsletter-signup/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
