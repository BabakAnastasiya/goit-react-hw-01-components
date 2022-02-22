import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function Statistic ({title,stats}){
return <section className={s.statistics}>
<h2 className={s.title}>{title}</h2>

<ul className={s.statList}>
    {stats.map (stat => {
        return (<li key={stat.id} className={s.item}>
        <span className={s.label}>{stat.label}</span>
        <span className={s.percentage}>{stat.percentage}</span>
      </li>)
    })}
</ul>
</section>}

Statistic.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape ({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}

export default Statistic