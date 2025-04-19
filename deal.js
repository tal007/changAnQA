const inputNode = document.getElementById('input');
const listNode = document.getElementById('list');

inputNode.addEventListener('input', (e) => {
  const value = e.target.value;
  listNode.innerHTML = null;

  const ansList  = qaList.filter(q => q.q.includes(value));

  const fragment = document.createDocumentFragment();

  ansList.forEach(ans => {
    const list = document.createElement("li");
    list.className = 'mb-4 mt-4'
    const qNode = document.createElement("div");
    const aNode = document.createElement("div");

    qNode.className = 'text-sky-500'

    qNode.innerHTML = `Q: ${ans.q}`;
    aNode.innerHTML = `A: ${ans.a[0]}`;

    list.appendChild(qNode);
    list.appendChild(aNode);

    fragment.appendChild(list);
  })

  listNode.appendChild(fragment);
})
