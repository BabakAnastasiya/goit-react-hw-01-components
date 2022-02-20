import PropTypes from 'prop-types';

function Statistic ({title,stats}){
return <section className="statistics">
<h2 className="title">{title}</h2>

<ul className="stat-list">
    {stats.map (stat => {
        return (<li key={stat.id} className="item">
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
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