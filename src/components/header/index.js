import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { STORAGE_VERSION } from '../../config/useConfig';

import Toggle from './toggle';

const Header = ({
	currentUrl,
	config,
	toggleShowAllResources,
	toggleShowFocusMaterials,
	toggleShowFilter,
	toggleShowExp,
}) => (
	<header class={style.header}>
		<div class={style.title}>
			<h1>
				<a href="./table">
					<span class={style.deco}>:.:</span>  明日方舟 | 干员培养表
					<span class={style.version}>V{STORAGE_VERSION}</span>
				</a>
			</h1>
		</div>
		<div class={style.nav_group}>
			<nav>
				<Link activeClassName={style.active} href="/">首页</Link>
				<Link activeClassName={style.active} href="/table">培养表</Link>
				<Link activeClassName={style.active} href="/operator">干员</Link>
				<Link activeClassName={style.active} href="/materials">材料</Link>
				<Link activeClassName={style.active} href="/farming">刷图</Link>
				<Link activeClassName={style.active} href="/stock">库存</Link>
				<a href="https://map.ark-nights.com">地图查看
					<img src="../../assets/icons/external.png" alt="external" style={{ margin: '0 0 0 4px', width: '12px', height: '12px' }} />
				</a>
				<Link activeClassName={style.active} href="/backup">数据导出</Link>
			</nav>
		</div>
		{
			currentUrl === '/table' && (
				<div class={style.toggles}>
					<Toggle
						value={config.showFilter || config.filters.length > 0}
						toggle={value => {
							toggleShowFilter(!config.showFilter || value);
						}}
						content="筛选材料"
					/>
					<Toggle
						value={config.showAllResources}
						toggle={toggleShowAllResources}
						content="显示全部资源"
					/>
					<Toggle
						value={config.showFocusMaterials}
						toggle={toggleShowFocusMaterials}
						content="显示追踪材料"
					/>
				</div>
			)
		}
	</header>
);

export default Header;
