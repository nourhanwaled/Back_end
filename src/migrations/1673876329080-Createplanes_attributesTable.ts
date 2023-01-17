import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateplanesAttributesTable1673876329080
  implements MigrationInterface
{
  private table = 'planes_attributes';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.table,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'plansId',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'attributesId',
            type: 'int4',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['plansId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'plans',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.table,
      new TableForeignKey({
        columnNames: ['attributesId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attributes',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE ${this.table}`);
  }
}
