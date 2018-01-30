$("#theTarget").skippr({
    // スライドタイプ ("fade" or "slide")
    transition :'fade',
    // 次のスライドまでの移行時間(単位ミリ秒)
    speed : 1000,
    // イージングの種類
    easing :'easeOutQuart',
    // ナヴ・タイプ("block" or "bubble")
    navType :'block',
    // 子要素の種類("div" or "img")
    childrenElementType :'div',
    // 矢印の表示有無(trueで表示)
    arrows :true,
    // スライドショーの自動再生
    autoPlay :true,
    // 自動再生時のスライド移行時間(単位ミリ秒)
    autoPlayDuration : 5000,
    // 矢印キーの有効化
    keyboardOnAlways :true,
    // 一枚目のスライドに戻る矢印の表示の有無
    hidePrevious :false
});