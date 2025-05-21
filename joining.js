(() => {
  "use strict";

  kb.event.on("kb.create.load.complete", (event) => {
    // 誓約書同意フィールドのラッパー要素を取得
    const wrapper = document.querySelector(
      'div.kb-field[field-id="誓約書同意"]'
    );
    if (!wrapper) return event;

    // フレックスレイアウトの設定
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "8px"; // リンクと入力部の間隔

    // リンク要素を生成
    const link = document.createElement("a");
    link.href = "https://example.com/consent.pdf"; // 実際のURLに置き換え
    link.textContent = "誓約書を確認";
    link.target = "_blank";
    link.style.textDecoration = "underline";

    // 先頭にリンクを差し込む
    wrapper.insertBefore(link, wrapper.firstChild);

    return event;
  });
})();
