// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // 滚动时添加效果
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(13, 13, 13, 0.98)';
            navbar.style.boxShadow = '0 4px 30px rgba(220, 38, 38, 0.1)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // 隐藏/显示导航栏
        if (currentScroll > lastScroll && currentScroll > 300) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // 设置导航栏过渡
    navbar.style.transition = 'transform 0.3s, background 0.3s';

    // 滚动触发动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // 为所有卡片添加动画类
    const animateElements = document.querySelectorAll(
        '.trauma-card, .pain-card, .story-card, .impact-item, .stat-item'
    );

    animateElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // 添加CSS动画类
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        /* 数字滚动动画 */
        @keyframes countUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .stat-item.animate-in {
            animation: countUp 0.6s ease forwards;
        }

        /* 卡片依次出现 */
        .trauma-card:nth-child(1) { transition-delay: 0s; }
        .trauma-card:nth-child(2) { transition-delay: 0.1s; }
        .trauma-card:nth-child(3) { transition-delay: 0.2s; }

        .pain-card:nth-child(1) { transition-delay: 0s; }
        .pain-card:nth-child(2) { transition-delay: 0.1s; }
        .pain-card:nth-child(3) { transition-delay: 0.2s; }
        .pain-card:nth-child(4) { transition-delay: 0.3s; }
        .pain-card:nth-child(5) { transition-delay: 0.4s; }
        .pain-card:nth-child(6) { transition-delay: 0.5s; }
    `;
    document.head.appendChild(style);

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';

    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);

    // 危机徽章呼吸效果增强
    const crisisBadge = document.querySelector('.crisis-badge');
    if (crisisBadge) {
        setInterval(function() {
            crisisBadge.style.transform = 'scale(1.05)';
            setTimeout(function() {
                crisisBadge.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }

    // 鼠标悬停时卡片效果
    const cards = document.querySelectorAll('.trauma-card, .pain-card, .story-card');
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // 统计数据动态显示
    const statsSection = document.querySelector('.crisis-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const statItems = entry.target.querySelectorAll('.stat-item');
                    statItems.forEach(function(item, index) {
                        setTimeout(function() {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }
});
