function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex];
}

function generateTrashTalk(options) {
  // job phrases
  const task = {
    engineer: ["加個按鈕", "加新功能", "切個版", "改一點 code"],
    designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
    entrepreneur: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"],
  };

  // job elaboration
  const phrase = ["很簡單", "很容易", "很快", "很正常"];

  // trash talk collection
  let collection = [];
  let target = "";

  // job  selection
  if (options === "engineer") {
    target = "工程師";
    collection = collection.concat(task.engineer);
  }

  if (options === "designer") {
    target = "設計師";
    collection = collection.concat(task.designer);
  }

  if (options === "entrepreneur") {
    target = "創業家";
    collection = collection.concat(task.entrepreneur);
  }

  // error handling
  if (target.length === 0) {
    return "請選至少一個職業";
  }

  // generate trash talk
  const taskSelection = sample(collection);
  const phraseSample = sample(phrase);

  result = `身為一個${target}，${taskSelection}，${phraseSample}吧！`;

  //return trash talk
  return result;
}

// export function
module.exports = generateTrashTalk;
