import { effect, reactive } from "@mini-vue/reactive";

const observe = window.observe = reactive({
  count: 0,
  count2: 10,
});

effect(() => {
  effect(() => {
    console.log("count2:", observe.count2);
  });
  console.log("Observe Count:", observe.count);
});

function add() {
  observe.count++;
}

document.querySelector("#app").innerHTML = `
  <button>add</button>
`;

document.querySelector("button").addEventListener("click", add);
