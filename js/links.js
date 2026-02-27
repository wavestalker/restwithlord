const LINKS = [
    {
        label: 'Patreon',
        href: 'https://patreon.com/RestWithLord',
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/@RestWithLord',
    },
    {
        label: 'YouTube Music',
        href: 'https://music.youtube.com/@RestWithLord',
    },
    {
        label: 'Spotify',
        href: 'https://open.spotify.com/show/7cduxfpmTQlsvV3ifqoXOk',
    },
    {
        label: 'Apple',
        href: 'https://podcasts.apple.com/podcast/id1880500433',
    },
    {
        label: 'Amazon',
        href: 'https://music.amazon.com/podcasts/e5546e51-6927-4439-be07-2c493038a97e',
    },
    {
        label: 'iHeart',
        href: 'https://iheart.com/podcast/324969170',
    },
    {
        label: 'Castbox',
        href: 'https://castbox.fm/channel/id7106131',
    },
    {
        label: 'Overcast',
        href: 'https://overcast.fm/itunes1880500433',
    },
    {
        label: 'Player FM',
        href: 'https://player.fm/series/3719722',
    },
    {
        label: 'Pocket Casts',
        href: 'https://pca.st/l7l2wvwh',
    },
    {
        label: 'Podcast Index',
        href: 'https://podcastindex.org/podcast/7722773',
    },
    {
        label: 'Podcast Addict',
        href: 'https://podcastaddict.com/podcast/6811672',
    },
    {
        label: 'Pandora',
        href: 'https://pandora.com/podcast/night-prayers/PC:1001114354',
    },
];

function buildLink(link, index) {
    var el = document.createElement('a');
    el.className = 'link-card';
    el.href = link.href;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    el.style.animationDelay = (0.18 + index * 0.07) + 's';
    el.innerHTML = '<span class="link-label">' + link.label + '</span>';
    return el;
}

function renderLinks(container) {
    var frag = document.createDocumentFragment();
    LINKS.forEach(function (link, i) { frag.appendChild(buildLink(link, i)); });
    container.appendChild(frag);
}
