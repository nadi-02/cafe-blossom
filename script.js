// HTMLの読み込みが完了してからJavaScriptの処理を実行します
document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================
    // 1. スクロール時にヘッダーに影をつける処理
    // =========================================
    const header = document.getElementById('header');

    // 画面がスクロールされたときに実行されるイベント
    window.addEventListener('scroll', () => {
        // スクロール量が50pxを超えたら 'scrolled' クラスを追加し、それ以外は外します
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // =========================================
    // 2. スムーススクロール（メニューをクリックした時になめらかに移動する）
    // =========================================
    // ナビゲーション内のすべてのリンク（aタグ）を取得します
    const navLinks = document.querySelectorAll('.global-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // リンクのデフォルトの動作（パッと瞬間的に移動する）を無効化します
            e.preventDefault(); 
            
            // リンク先のIDを取得します（例: href="#concept" から "#concept" を取得）
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // ヘッダーが上部に固定されているため、その高さ分だけスクロール位置を上にずらして
                // コンテンツがヘッダーに隠れないように計算します
                const headerHeight = header.offsetHeight;
                // 移動先のY座標を計算：要素の画面一番上からの距離 + 現在のスクロール量 - ヘッダーの高さ
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                // なめらかにスクロールさせます
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
