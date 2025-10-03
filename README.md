# Assignment Questions

## What is JSX, and why is it used?

JSX stands for JavaScript XML. Its a like a syntactic sugar added on JavaScript. JSX codes look like HTML, but those are actually JavaScript.

It is used in React to build used interfaces following step-by-step component model, which meant to be highly reusuable.

Having said that, HTML has been evolving as merely a markup language and with advancement of web, we started using JS to build functionalities and implement business logics. Coding integration became a tedious challenge, and this is wher JSX came handy. 

JSX let us writing HTML codes in the JS files. It also help reduce the amout of code considerably, comparing with the vanila version. Besides, it increases human readability as well. Yet, we can inject vanila JS as and when required in JSX using {}, which further elevates the level of convenience.

## What is the difference between States and Props?

Props refer to the argument value-passing mechanism as parameters from the parent to child components, whereas States are value-storage-and-retrival mechanism in a way that as and when the stored value is updated, all elements associated with that value is re-rended as well. This value for both can be anything simple or complex, ranging from variables to structured/unstructured files, even functions as well.

For example, lets assume we store a value in a variable and keep passing that as props to different functions. These functions prints that value on different pages. Now if the stored value is changed, those pages will not reflect that automatically. But if we do the same using States, all pages will be re-rendered as soon as the State value is changed.

While the aforementioned is the main conceptual difference between Props and States, there are number functional/operational differences as well.

1. Prop values (in argument states) can be initialized/updated in traditional way. In the contrary, States offer us a dedicated funtion to have the stored value changed.

2. States are mutable, whereas props are mutable only at it's argument state in the parent components, but immutable inside the child components.

3. Normally props work in one direction only (downwards), which is not the case with states.

